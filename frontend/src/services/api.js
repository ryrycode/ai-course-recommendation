const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000";

class ApiError extends Error {
  constructor(message, status, details) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.details = details;
  }
}

async function handleResponse(response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = Array.isArray(data.detail)
      ? data.detail.map((item) => item.msg).join(", ")
      : data.detail || data.message || "An error occurred";
    throw new ApiError(detail, response.status, data);
  }

  return data;
}

export async function registerStudent(studentData) {
  const response = await fetch(`${API_BASE_URL}/students/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentData),
  });
  return handleResponse(response);
}

export async function getInterests() {
  const response = await fetch(`${API_BASE_URL}/interests/`);
  return handleResponse(response);
}

export async function getAssessmentQuestions() {
  const response = await fetch(`${API_BASE_URL}/assessment/questions`);
  return handleResponse(response);
}

export async function createAttempt(studentId) {
  const response = await fetch(`${API_BASE_URL}/assessment/attempts/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ student_id: studentId }),
  });
  return handleResponse(response);
}

export async function submitResponses(attemptId, responses) {
  const response = await fetch(`${API_BASE_URL}/assessment/attempts/${attemptId}/responses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ responses }),
  });
  return handleResponse(response);
}

export async function completeAttempt(attemptId) {
  const response = await fetch(`${API_BASE_URL}/assessment/attempts/${attemptId}/complete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  return handleResponse(response);
}

export async function getResults(attemptId, schoolType) {
  const url = new URL(`${API_BASE_URL}/assessment/attempts/${attemptId}/results`);
  if (schoolType) {
    url.searchParams.set("school_type", schoolType);
  }
  const response = await fetch(url);
  return handleResponse(response);
}

export { ApiError };