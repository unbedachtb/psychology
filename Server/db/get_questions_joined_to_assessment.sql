SELECT * FROM questions
JOIN assessments
ON (assessments.id = questions.assessments_id)
WHERE assessments.id = $1;
