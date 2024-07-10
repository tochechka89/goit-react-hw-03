import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, onDelete }) {
    return (
        <div className={css.container}>
            <p className={css.name}>{name}</p>
            <p className={css.phone}>{number}</p>
            <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}