import CLIRunner from '../core/CLIRunner';
import createData from './create-data';
import deploy from './deploy';

const scripts = {
    deploy,
    createData
};

new CLIRunner(scripts);
