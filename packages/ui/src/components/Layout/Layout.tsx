export const Layout = ({children}) => {

    return (
        <LayoutContainer>
            <Topbar />
            <SideNav />
            <Content>
                {children}
            </Content>
        </LayoutContainer>
    )
}