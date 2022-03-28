import {
  TypedValueEntity,
  ValueEntityCommandContext
} from "../kalix";
import proto from "./proto";

export type State = proto.com.example.domain.ICounterState;
export type Command =
  | proto.com.example.IIncreaseValue
  | proto.com.example.IDecreaseValue
  | proto.com.example.IResetValue
  | proto.com.example.IGetCounter;

export type CommandHandlers = {
  Increase: (
    command: proto.com.example.IIncreaseValue,
    state: State,
    ctx: ValueEntityCommandContext<State>
  ) => void;
  Decrease: (
    command: proto.com.example.IDecreaseValue,
    state: State,
    ctx: ValueEntityCommandContext<State>
  ) => void;
  Reset: (
    command: proto.com.example.IResetValue,
    state: State,
    ctx: ValueEntityCommandContext<State>
  ) => void;
  GetCurrentCounter: (
    command: proto.com.example.IGetCounter,
    state: State,
    ctx: ValueEntityCommandContext<State>
  ) => proto.com.example.ICurrentCounter;
};

export type CounterService = TypedValueEntity<
  State,
  CommandHandlers
>;
