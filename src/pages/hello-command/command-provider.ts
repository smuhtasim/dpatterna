import {
    ICommand,
    Invoker,
    NormalLight,
    RedLight,
    LightOnCommand,
    LightOffCommand,   
    RedLightOnCommand,
    RedLightIncreaseLuminosityCommand,
    RedLightDecreaseLuminosityCommand,
    RedLightOffCommand   
} from "../../patterns/command/command-remote";

let isRedLightOn: boolean = false                   // in default state the light is turned off
let isNormalLightOn: boolean = false
let result: string;


export function commandHandler(command: string): string {

    switch (command) {
        case "on":

            result = commandOnLight(new LightOnCommand(new NormalLight()))
            isNormalLightOn = true                  // even though the light is turned off but it is not red
            isRedLightOn = false
            break;

        case "off":
        
            result = commandOnLight(new LightOffCommand(new NormalLight()))
            isNormalLightOn = false
            isRedLightOn = false
            break

        case "increase":
            
            if(isRedLightOn)                // if the light is in red state only then it will increase its luminosity
            {
                result = commandOnLight(new RedLightIncreaseLuminosityCommand(new RedLight()))
            }
            break

        case "decrease":
          
            if(isRedLightOn)                // if the light is in red state only then it will decrease its luminosity
            {
                result = commandOnLight(new RedLightDecreaseLuminosityCommand(new RedLight()))
            }
            break

        case "red":
 
            if(isNormalLightOn)
            {
                result = commandOnLight(new RedLightOnCommand(new RedLight()))
                isRedLightOn = true
            }           
            break
        default:

    }

    return result;
}

export function commandOnLight(command: ICommand): string {

    const remoteController = new Invoker();
    remoteController.setCommand(command)
    return remoteController.executeCommand()

}

