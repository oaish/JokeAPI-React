export default function Container({type, children}) {
    return (
        <div className={type}>
            {children}
        </div>
    )
}