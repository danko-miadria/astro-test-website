interface NetlifyIdentity {
    on(event: "init", callback: (user: unknown) => void): void;
    on(event: "login", callback: () => void): void;
}

interface Window {
    netlifyIdentity?: NetlifyIdentity;
}
