export const mockCustomHooks = <T extends object>(path: string, method: T) => {
    vi.mock(path, async () => {
        const actual = await vi.importActual(path);
        if (actual) {
            return { ...actual, ...method };
        }
    });
}
