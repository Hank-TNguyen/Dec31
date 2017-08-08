export function cloneJSON(json) {
    // Simple way to deep clone the loaded JSON
    return JSON.parse(JSON.stringify(json));
}