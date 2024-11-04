import { useTimer } from "../../utils/fakeLoader"; 
import "@testing-library/jest-dom";

describe("useTimer utility function", () => {
  it("resolves after 2 seconds", async () => {
    jest.useFakeTimers(); 

    const timerPromise = useTimer();

    
    jest.advanceTimersByTime(2000);

    await expect(timerPromise).resolves.toBeUndefined();

    jest.useRealTimers(); 
  });
});
