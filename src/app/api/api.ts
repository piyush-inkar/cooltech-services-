// api.ts
export async function getReview<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Request failed");
    }

    return res.json() as Promise<T>;

}


export async function postReviews<T>(url: string, body: unknown, options?: RequestInit): Promise<T> {
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        ...options
    })

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Request Failed");
    }

    return res.json() as Promise<T>
}



// maintain api 

export async function getMaintain<T>(url: string, options?: RequestInit): Promise<T> {
    const res = await fetch(url, {
        headers: { "Content-Type": "application/json" },
        ...options,
    });

    if (!res.ok) {
        const message = await res.text();
        throw new Error(message || "Request failed");
    }

    return res.json() as Promise<T>;

}