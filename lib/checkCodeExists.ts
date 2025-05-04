export const checkCodeExists = async (code: string) => {
    const response = await fetch("/api/codeCheck", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({bookingCode: code}),
    });

    const result = await response.json();
    return result.exists;
}