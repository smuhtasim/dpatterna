var brightness:number = 0

export interface ICommand {

    execute(): string

    unexecute(): void

}

export class Invoker {
    command!: ICommand;

    constructor() {
    }

    setCommand(onCommand: ICommand) {
        this.command = onCommand;           // Which command needs to executed on the light.
    }

    executeCommand() {
        return this.command.execute()       // Executes the command that has been previously set
    }


}

export abstract class Light {

    public abstract lightOn(): string 
        
    public lightOff(): string {             // it will turn off the light regardless the current state of light
        return "off"
    }
} 


export class NormalLight extends Light{

    public lightOn(): string {
        return 'on'
    }

}

export class RedLight extends Light{

    public lightOn(): string {
        return `red0`                   //When turning on the red light will be in the state of lowest brightness 
    }


    public increaseLuminosity(): string {
        if(brightness < 3)              // Taking 3 as the highest brightness
        {
            brightness++;
        }
        return `red${brightness}`       // To indicate brightness of red light and it will display red/${brightness}.png accordingly
    }

    public decreaseLuminosity(): string {
        if(brightness > 0)              // Taking 0 as the lowest brightness
        {
            brightness--;
        }
        return `red${brightness}`       // To indicate brightness of red light and it will display red/${luminosity}.png accordingly

    }
}

export class LightOnCommand implements ICommand {

    private light: NormalLight

    constructor(_light: NormalLight) {
        this.light = _light;
    }

    execute(): string {
        return this.light.lightOn();
    }

    unexecute(): void {

    } 


}

export class LightOffCommand implements ICommand {
    private light: NormalLight

    constructor(_light: NormalLight) {
        this.light = _light
    }

    execute(): string {
        return this.light.lightOff()
    }

    unexecute(): void {

    } 

}

export class RedLightOnCommand implements ICommand {
    
    private light: RedLight;

    constructor(_light: RedLight) {
        this.light = _light;
    }

    execute(): string {
        return this.light.lightOn()
    }

    unexecute(): void {

    } 

}

export class RedLightIncreaseLuminosityCommand implements ICommand {
    private light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseLuminosity()
    }

    unexecute(): void {

    } 

}

export class RedLightDecreaseLuminosityCommand implements ICommand {
    private light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseLuminosity()
    }

    unexecute(): void {

    } 

}


export class RedLightOffCommand implements ICommand {
    private light: RedLight;

    constructor(_light: RedLight) {
        this.light = _light;
    }

    execute(): string {
        return this.light.lightOff()
    }

    unexecute(): void {

    } 

}


