using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
public class LogicScript : MonoBehaviour
{
    public int ps;
    public Text scoreText;
    public GameObject gameOverScreen;
    
    [ContextMenu("Increase Score")]
    public void AddScore(int scoreToAdd)
    {
        ps += 1;
        scoreText.text = ps.ToString();
    }
    public void restartGame()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().name);
    }
    public void gameOver() {
        
       
        gameOverScreen.SetActive(true);

    }
}
