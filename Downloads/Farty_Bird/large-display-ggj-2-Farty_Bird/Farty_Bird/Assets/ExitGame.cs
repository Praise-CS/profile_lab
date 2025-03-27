using UnityEngine;
using UnityEngine.UI;

public class ExitDialog : MonoBehaviour
{
    public GameObject exitPanel;

    public Button homeButton;

    void Start()
    {
        // Exit panel is hidden at start
        HideDialog();

        // Assign Home button listener
        homeButton.onClick.AddListener(ShowDialog);

        // Find and assign Confirm/Cancel buttons automatically
        Button[] buttons = exitPanel.GetComponentsInChildren<Button>();
        foreach (Button button in buttons)
        {
            if (button.name == "ConfirmButton")
                button.onClick.AddListener(ConfirmExit);
            else if (button.name == "CancelButton")
                button.onClick.AddListener(HideDialog);
        }
    }

    public void ShowDialog()
    {
        exitPanel.SetActive(true);
    }

    public void HideDialog()
    {
        exitPanel.SetActive(false);
    }

    void ConfirmExit()
    {
        Application.Quit();
    }
}
