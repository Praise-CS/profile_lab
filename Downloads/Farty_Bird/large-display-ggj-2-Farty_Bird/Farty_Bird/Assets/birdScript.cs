using System.Collections;
using UnityEngine;

public class birdScript : MonoBehaviour
{
    public Rigidbody2D rb;
    public int speed = 10;
    public LogicScript logic;
    public bool BIA = true;

    public GameObject temporaryImagePrefab;
    private GameObject temporaryImage;

    public AudioSource audioSource;  // Reference to the AudioSource component
    public AudioClip keyPressSound;  // AudioClip for the key press sound

    void Start()
    {
        logic = GameObject.FindGameObjectWithTag("Logic").GetComponent<LogicScript>();

        // Initialize the AudioSource
        audioSource = GetComponent<AudioSource>();

        // Assign the AudioClip to the AudioSource
        audioSource.clip = keyPressSound;
    }

    void Update()
    {
        if ((Input.touchCount > 0 || Input.anyKeyDown) && BIA)
        {
            rb.velocity = Vector2.up * speed;

            // Play the sound effect if not already playing
            if (!audioSource.isPlaying)
            {
                audioSource.Play();
            }

            // Attach the temporary image
            AttachTemporaryImage();
        }
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        logic.gameOver();
        BIA = false;

        // Remove the temporary image when a collision occurs
        RemoveTemporaryImage();
    }

    private void AttachTemporaryImage()
    {
        if (temporaryImage == null)
        {
            // Set the position just below the player
            Vector3 newPosition = transform.position - new Vector3(1.6f, 1.6f, 0f);

            // Instantiate the temporary image at the new position
            temporaryImage = Instantiate(temporaryImagePrefab, newPosition, Quaternion.identity);

            // Set the player as the parent of the temporary image
            temporaryImage.transform.parent = transform;

            // Start a coroutine to remove the temporary image after a delay
            StartCoroutine(RemoveTemporaryImageAfterDelay(0.10f));  // Adjust the duration as needed
        }
    }

    private IEnumerator RemoveTemporaryImageAfterDelay(float delay)
    {
        yield return new WaitForSeconds(delay);

        // Remove the temporary image
        RemoveTemporaryImage();
    }

    private void RemoveTemporaryImage()
    {
        if (temporaryImage != null)
        {
            // Destroy the temporary image
            Destroy(temporaryImage);
            temporaryImage = null;
        }
    }
}
