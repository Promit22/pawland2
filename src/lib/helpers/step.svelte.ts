let step = $state(0);

export function incrementStep() {
    step += 1;
}

export function getStep() {
    return step;
}