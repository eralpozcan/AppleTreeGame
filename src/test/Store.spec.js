import { createPinia,setActivePinia } from "pinia";
import { beforeEach,describe,expect,test } from "vitest";
import { useAppleTreeStore } from "../stores/index.js";

describe("Store", () => {
    beforeEach(() => {
        const pinia = createPinia();
        setActivePinia(pinia);
    });
    test("shackingStatus", () => {
        const store = useAppleTreeStore();
        expect(store.shackingStatus).toBe(false);
    });
    test("playingStatus", () => {
        const store = useAppleTreeStore();
        expect(store.playingStatus).toBe(false);
    });
    test("appleIsGroundStatus", () => {
        const store = useAppleTreeStore();
        expect(store.appleIsGroundStatus).toBe(false);
    });
    test("svgData", () => {
        const store = useAppleTreeStore();
        expect(store.svgData).toStrictEqual([]);
    });
    test("basketSvgData", () => {
        const store = useAppleTreeStore();
        expect(store.basketSvgData).toStrictEqual([]);
    });

    test("setPlayingStatus", () => {
        const store = useAppleTreeStore();
        store.setPlayingStatus(true);
        expect(store.playingStatus).toBe(true);
    });
    test("setShackingStatus", () => {
        const store = useAppleTreeStore();
        store.setShackingStatus(true);
        expect(store.shackingStatus).toBe(true);
    });
    test("setAppleIsGroundStatus", () => {
        const store = useAppleTreeStore();
        store.setAppleIsGroundStatus(true);
        expect(store.appleIsGroundStatus).toBe(true);
    });
});
