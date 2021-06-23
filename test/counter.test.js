import { MockValueEntity } from "./testkit.js";
import { expect } from "chai";
import counter from "../src/counter.js";

describe("CounterService", () => {
  const entityId = "entityId";
  
  describe("Increase", () => {
    it("should...", () => {
      const entity = new MockValueEntity(counter, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("Increase", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
    });
  });
  
  describe("Decrease", () => {
    it("should...", () => {
      const entity = new MockValueEntity(counter, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("Decrease", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
    });
  });
  
  describe("Reset", () => {
    it("should...", () => {
      const entity = new MockValueEntity(counter, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("Reset", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
    });
  });
  
  describe("GetCurrentCounter", () => {
    it("should...", () => {
      const entity = new MockValueEntity(counter, entityId);
      // TODO: you may want to set fields in addition to the entity id
      // const result = entity.handleCommand("GetCurrentCounter", { entityId });
      
      // expect(result).to.deep.equal({});
      // expect(entity.error).to.be.undefined;
      // expect(entity.state).to.deep.equal({});
    });
  });
});