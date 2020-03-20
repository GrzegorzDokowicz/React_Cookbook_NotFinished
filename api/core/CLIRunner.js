import CLIAction from './CLIAction';

class CLIRunner extends CLIAction {
    constructor(scripts) {
        super(false);
        this.scripts = scripts;
        this.run();
    }

    run() {
        const [scriptName] = this.params;

        if (this.scripts.hasOwnProperty(scriptName)) {
            this.scripts[scriptName].run();
        } else {
            console.error("Cannot run script", scriptName, ".");
        }
    }
}

export default CLIRunner;
