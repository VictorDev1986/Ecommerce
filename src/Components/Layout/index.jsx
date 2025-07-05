import FullWidthFooter from '../FullWidthFooter';

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-col items-center">
                {children}
            </div>
            <FullWidthFooter />
        </>
    )
}

export default Layout