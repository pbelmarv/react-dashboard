import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
    Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header
                title="Preguntas"
                subtitle="Página sobre Preguntas Frecuentes"
            />

            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Una pregunta importante
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti molestiae impedit iusto facere.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Otra pregunta importante
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Itaque quisquam dolor impedit tempora blanditiis
                        ex ratione iure animi repellat adipisci recusandae
                        voluptate enim corrupti ducimus aperiam non maxime, est
                        commodi?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        La pregunta favorita
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam voluptatum ullam earum perferendis assumenda nemo
                        aliquam dicta in! Consequatur illum aperiam velit natus
                        voluptatibus deleniti consectetur excepturi quod
                        architecto quos. Tempora doloremque minus vitae nesciunt
                        officia labore quaerat provident itaque. Fugiat ullam
                        corrupti voluptate reiciendis qui voluptatem iure
                        accusamus itaque voluptatum nemo? Tempora cum porro
                        alias nesciunt praesentium animi aperiam! Sequi,
                        suscipit distinctio. Ut esse nemo possimus quis
                        distinctio laboriosam temporibus eaque eveniet.
                        Perferendis optio deserunt omnis quibusdam nemo
                        cupiditate, delectus numquam hic illo, impedit laborum
                        consequatur expedita in itaque! Ad, quisquam nobis
                        dolores pariatur repellat corporis, fugiat maiores ex
                        fugit ullam illo laudantium necessitatibus? Ipsum
                        pariatur assumenda quod, voluptatum atque odit officiis
                        amet veniam magnam est unde, quasi necessitatibus! Minus
                        vel dolore ad placeat hic assumenda at exercitationem
                        deserunt, veritatis dolor sit amet in itaque nesciunt
                        ullam odit maiores reiciendis minima magnam optio cum
                        pariatur laborum? Voluptates, pariatur placeat.
                        Inventore harum laudantium, sit dignissimos culpa fuga
                        sapiente dolores laborum quo aliquam saepe optio
                        reprehenderit molestias ipsa error est illum delectus
                        natus rerum odit itaque in iusto nemo! Hic, commodi?
                        Repellat doloribus animi ratione sint veniam voluptate
                        qui quis, nostrum quos nisi ab suscipit accusantium
                        dolorum similique. Cumque consequuntur dolorem eaque,
                        consectetur sunt repudiandae ex explicabo et labore
                        repellat harum!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        Pregunta aleatoria
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti molestiae impedit iusto facere.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        La pregunta final
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deleniti molestiae impedit iusto facere.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Faq;
