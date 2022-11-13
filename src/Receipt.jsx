export default function Receipt({ id, when, what }) {
    return <div className="Receipt">
        <label> Receipt #{id} ({when})</label>
        <div>{what}</div>
    </div>
}
