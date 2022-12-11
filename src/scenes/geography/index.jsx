import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeoChart";
import { tokens } from "../../theme";

const Geography = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header
                title="Gráfco Geográfico"
                subtitle="Un simple gráfico Geográfico"
            />
            <Box
                height="75vh"
                border={`1px solid ${colors.grey[100]}`}
                borderRadius="15px"
            >
                <GeographyChart />
            </Box>
        </Box>
    );
};

export default Geography;
