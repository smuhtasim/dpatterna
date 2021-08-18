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
        this.command = onCommand;
    }

    executeCommand() {
        return this.command.execute()
    }


}

export abstract class Light {

    public abstract lightOn(): string 
        
    public lightOff(): string {
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
        return `red0`
    }


    public increaseLuminosity(): string {
        if(brightness < 3)
        {
            brightness++;
        }
        return `red${brightness}`
    }

    public decreaseLuminosity(): string {
        if(brightness > 0)
        {
            brightness--;
        }
        return `red${brightness}`

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


