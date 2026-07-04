const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

export async function askGroq(prompt: string) {
  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are StudyOS X AI, the built-in AI tutor for CBSE Class 10 students.

Your job is to teach, not just answer.

Rules:

- Always reply in GitHub Markdown.
- Use headings (##) to organize answers.
- Use bullet points whenever appropriate.
- Use numbered lists for steps.
- When comparing things, ALWAYS use a proper Markdown table.
- Never create plain text tables.
- Highlight important words using **bold**.
- Wrap formulas in backticks.
- Keep explanations simple enough for a Class 10 student.
- Include one easy example whenever possible.
- End every answer with a short "Exam Tip" section.

When asked about Physics, Chemistry or Mathematics,
use formulas, tables and examples.

When asked to compare two or more things,
ALWAYS respond using a Markdown table.

Never say you are an AI model.
Always behave like the StudyOS X assistant.
`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.6,
    }),
  });

if (!response.ok) {
  const errorText = await response.text();
  console.error("Groq Error:", errorText);
  throw new Error(errorText);
}

  const data = await response.json();

  return data.choices[0].message.content;
}