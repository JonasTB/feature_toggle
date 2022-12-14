import React from 'react';
import flagsmith from "flagsmith";

export const useFlag = () => {
    const [flags, setFlags] = React.useState({});

    React.useEffect(() => {
        flagsmith.init({
            environmentID: 'NBsEX3uptxMJReiGHPMJwi',
            api: 'http://localhost:8000/api/v1/',
            onChange: (oldFlags, params) => {
                setFlags(flagsmith.getAllFlags());
            },
        });
        flagsmith.startListening(3000);

        return () => flagsmith.stopListening();
    }, [])

    return flags;
}