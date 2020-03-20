import CLIRunner from '../core/CLIRunner';
import createDatabase from './create-data';
import deploy from './deploy';

const scripts = {
    deploy,
    createDatabase
};

new CLIRunner(scripts);
