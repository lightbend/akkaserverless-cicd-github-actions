import akkaserverless from "@lightbend/akkaserverless-javascript-sdk";
const ValueEntity = akkaserverless.ValueEntity;

/**
 * Type definitions.
 * These types have been generated based on your proto source.
 * A TypeScript aware editor such as VS Code will be able to leverage them to provide hinting and validation.
 * 
 * State; the serialisable and persistable state of the entity
 * @typedef { import("../lib/generated/counterservice").State } State
 * 
 * CounterService; a strongly typed extension of ValueEntity derived from your proto source
 * @typedef { import("../lib/generated/counterservice").CounterService } CounterService
 */

/**
 * @type CounterService
 */
const entity = new ValueEntity(
  [
    "counter_domain.proto",
    "counter_api.proto"
  ],
  "com.example.CounterService",
  "counter",
  {
    includeDirs: ["./proto"],
    serializeFallbackToJson: true
  }
);

//demo
entity.setInitial(entityId => ({}));

//demo
entity.setCommandHandlers({
  Increase(command, state, ctx) {
    return ctx.fail("The command handler for `Increase` is not implemented, yet");
  },
  Decrease(command, state, ctx) {
    return ctx.fail("The command handler for `Decrease` is not implemented, yet");
  },
  Reset(command, state, ctx) {
    return ctx.fail("The command handler for `Reset` is not implemented, yet");
  },
  GetCurrentCounter(command, state, ctx) {
    return ctx.fail("The command handler for `GetCurrentCounter` is not implemented, yet");
  }
});

export default entity;