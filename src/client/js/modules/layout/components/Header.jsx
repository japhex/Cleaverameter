import React from 'react';
import MainHeader from 'modules/layout/components/MainHeader';
import SubHeader from 'modules/layout/components/SubHeader';
import Toolbar from 'modules/layout/components/Toolbar';

const Header = () => (
    <header>
        <MainHeader brandName="Cleaverameter" />
        <SubHeader clientVersion="FCP6" currentRelease="27" fcpLabel="abc123" buildStatus={true} />
        <Toolbar />
    </header>
);

export default Header;
