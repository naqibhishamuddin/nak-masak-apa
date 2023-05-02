export const mockCustomHooks = <T extends object>(path: string, method: T,) => {
    vi.mock(path, () => {
        return method
    });
}
