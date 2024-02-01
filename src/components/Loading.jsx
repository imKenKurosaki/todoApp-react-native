export default function Loading() {
    return <div>
        Loading........
    </div>
}

export function delayData(component) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 100);
    }).then(() => component);
}
