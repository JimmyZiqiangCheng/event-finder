import { waitFor } from "@testing-library/react";
import { getData } from "./eventsApi";

describe("getData", () => {
  it("should return all the events and hosts as [events, hosts] if no parameter is used", async () => {
    const [events, hosts] = await getData();
    expect(events.length > 0).toBe(true);
    expect(hosts.length > 0).toBe(true);
  });
  it("should return the event selected if event id is passed", async () => {
    const [events, hosts] = await getData(null, 5);
    console.log(events);
    expect(events.length).toBe(1);
    expect(events[0].eventId).toBe("5");
  });
});
