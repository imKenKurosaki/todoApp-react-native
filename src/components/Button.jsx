
export default function Button({id, children, callbackFn, styles}) {
    return <button onClick={() => {callbackFn(id)}} className={`${styles} px-3 p-2 border rounded-md text-slate-200`}>
        {children}
    </button>
}