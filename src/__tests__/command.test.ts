import { Invoker, LightOffCommand, LightOnCommand, NormalLight, RedLight, RedLightDecreaseLuminosityCommand, RedLightIncreaseLuminosityCommand, RedLightOnCommand } from "patterns/command/command-remote";
import { commandOnLight } from "pages/hello-command/command-provider";

const invoker = new Invoker();
describe('Command Pattern Test', () => {
    test('Turn On Light', () => {
        let actual = commandOnLight(new LightOnCommand(new NormalLight()))
        invoker.setCommand(new LightOnCommand(new NormalLight()))
        let expectation = invoker.executeCommand()
        expect(actual).toEqual(expectation);
    })
    test('Turn Off Light', () => {
        let actual = commandOnLight(new LightOffCommand(new NormalLight()))
        invoker.setCommand(new LightOffCommand(new NormalLight()))
        let expectation = invoker.executeCommand()
        expect(actual).toEqual(expectation);
    })
    test('Set Red Light', () => {
        let actual = commandOnLight(new RedLightOnCommand(new RedLight()))
        invoker.setCommand(new RedLightOnCommand(new RedLight()))
        let expectation = invoker.executeCommand()
        expect(actual).toEqual(expectation);
    })
    test('Red Light Increased', () => {
        let actual = commandOnLight(new RedLightIncreaseLuminosityCommand(new RedLight()))
        let expectation = "red1"
        expect(actual).toEqual(expectation);
    })
    test('Red Light Decreased', () => {
        let actual = commandOnLight(new RedLightDecreaseLuminosityCommand(new RedLight()))
        let expectation = "red0"
        expect(actual).toEqual(expectation);
    })

})