using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PipeSpawner : MonoBehaviour
{

    public GameObject pipe;
    public float sr = 2;
    public float timer = 0;
    public float hOff = 10;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(timer< sr)
        {
            timer += Time.deltaTime;
            
        }
        else
        {
            spawnPipe();
            timer = 0;
        }
        
    }
    void spawnPipe()
    {
        float lPoint = transform.position.y -hOff;
        float hPoint = transform.position.y + hOff;
        Instantiate(pipe, new Vector3(transform.position.x, Random.Range(lPoint,hPoint),0), transform.rotation);
    }
}
