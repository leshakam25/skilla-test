import React from 'react';
import {Box, Container, Grid} from "@mui/material";
import Sidebar from "../../shared/modules/sidebar/sidebar.jsx";
import Header from "../../shared/modules/header/header.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../home/home.jsx";
import Calls from "../calls/calls.jsx";

const Wrapper = () => {
    return (
        <Box
            sx={{height: "100vh"}}
        >
            <Grid
                container
                sx={{height: "100%"}}
            >
                <Grid
                    item
                    xs={12}
                    md={1.5}
                    sx={{height: "100%"}}
                >
                    <Sidebar/>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={10.5}
                >
                    <Header/>
                    <Container
                        maxWidth="false"
                        sx={{
                            bgcolor: '#F1F4F9',
                            px: {
                                xs: 0, md: "120px"
                            },
                            py: {
                                xs: 0, md: "20px"
                            }
                        }}
                    >

                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/calls" element={<Calls/>}/>
                        </Routes>
                    </Container>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Wrapper;