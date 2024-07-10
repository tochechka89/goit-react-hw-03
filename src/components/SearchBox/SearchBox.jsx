import css from './SearchBox.module.css';

export default function SearchBox( {value, onSearch}) {
    return (
        <div className={css.container}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.field} type="name" value={value}
                onChange = {(e) => onSearch(e.target.value)} />
        </div>
    );
}