import s from "./appHeader.module.scss";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import { Button } from "../Button/Button";
import { headerLinksList } from "../../utils/constants/data.constants";
import { AppLogo } from "../AppLogo/AppLogo";
import { icons } from "../../utils/helper/icons";
import { Modal } from "@mantine/core";

export default function AppHeader() {
    const { width } = useViewportSize();
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <header className={s.header}>
            <div className="header-container">
                <div className={s.wrapper}>
                    {width <= 740 && <AppLogo variant="admin" />}
                    {width > 740 && (
                        <>
                            <nav className={s.navigation}>
                                <ul className={s.list}>
                                    {headerLinksList.map(({ title, path }) => (
                                        <li className={s.item} key={title}>
                                            <a className={s.link} href={path}>
                                                {title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <Button className={s.button} href="/">Бронюй</Button>
                        </>
                    )}
                    {width <= 740 && (
                        <>
                            <Modal
                                opened={opened}
                                onClose={close}
                                fullScreen
                                closeButtonProps={{ size: 'lg' }}
                                transitionProps={{ transition: 'fade', duration: 200 }}
                            >
                                <nav className={s.navigation}>
                                    <ul className={s.list}>
                                        {headerLinksList.map(({ title, path }) => (
                                            <li className={s.item} key={title}>
                                                <a className={s.link} href={path}>
                                                    {title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <Button variant="primary" className={s.buttonModal} href="/">Бронюй</Button>
                            </Modal>
                            <button onClick={open}>{icons.burger}</button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}
