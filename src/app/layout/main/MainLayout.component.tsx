import { FC } from "react"
import GlobalStyle from "../../../common/styles/Global.style";
import StyledMainLayout from "./MainLayout.style";
import Navbar from "./navbar/Navbar.component";
import Head from "next/head"
import { SessionProvider } from "next-auth/react";
import { UserContextProvider } from "../../../common/utils/usersession/UserSessionProvider.component";

interface MainLayoutProps {
    children: React.ReactNode;
    mainContentBgColor: string;
}

const MainLayout: FC<MainLayoutProps> = ({children, mainContentBgColor}) => {

    return (
        <>
            <Head>
                <title>Stowarzyszenie X</title>
                <meta  name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
            </Head>
                <UserContextProvider>
                    <GlobalStyle/>
                    <StyledMainLayout mainContentBgColor={mainContentBgColor}>
                        <Navbar />
                        <section className="content"> 
                            {/* main content */}
                            {children}
                        </section>
                        </StyledMainLayout>
                </UserContextProvider>
        </>    
    )
};

export default MainLayout;