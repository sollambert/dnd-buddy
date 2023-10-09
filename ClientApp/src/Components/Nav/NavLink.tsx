import { Link } from "react-router-dom"

type Props = {
    to: string,
}

export default function NavLink(props: React.PropsWithChildren<Props>) {
    return (
        <Link className="self-center px-2 text-3xl font-bold mr-4 ml-4 hover:invert bg-white dark:bg-black " to={props.to}>
            {props.children}
        </Link>
    )
}