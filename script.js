async function getRecommendation() {
    const userInput = document.getElementById('userInput').value;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer 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`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [{ "role": "user", "content": userInput }]
      })
    });
  
    const data = await response.json();
    document.getElementById('recommendationOutput').textContent = data.choices[0].message.content;
  }
  
