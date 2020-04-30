import React from 'react'
import { Grommet, Box, Text, Paragraph, Heading, Button, Grid, Form, FormField, TextInput, Chart, Footer, Anchor  } from 'grommet'
import AppBar from '../components/grommet/Appbar'
import { Notification, Edit } from 'grommet-icons';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

const GrommetHome = () => {

  return (
    <Grommet theme={theme}>
      <div>
        <AppBar>
          <Heading level='2' margin='none'>Holi</Heading>
          <Button icon={<Notification />} onClick={() => {}} />
        </AppBar>
      </div>
      <div>
       <Box direction='column' pad='small' flex>
          <Box 
            pad='medium'
            border={{
              color: 'brand',
              size: 'small'
            }}
            margin={{
              vertical: 'small'
            }}
            fill='horizontal'
            onClick={() => { console.log('something!') }}
          >
            <div>
              <Box
                margin={{
                  bottom: "medium",
                }}
              >
                <Text
                  size="large"
                >
                  Titulo Titulo
                </Text>
              </Box>
              <Paragraph>
                y un poco de lorem ipsum kansdkjqndkjqndkj nqsjkkqjsndjkqnds
              </Paragraph>
              <Paragraph>
                y un poco de lorem ipsum kansdkjqndkjqndkj nqsjkkqjsndjkqnds
              </Paragraph>
            </div>
          </Box>                    
          {/* <div>
            <Box
              pad='small'
              margin={{
                vertical: 'small'
              }}
              align='center'
              alignContent='center'
              direction='row'
              flex
            >
              <Button
                icon={<Edit />}
                label="Edit"
                margin={{ right: 'small' }}
                onClick={() => {}}
              />
              <Button
                icon={<Edit />}
                label="Edit"
                margin={{ right: 'small' }}
                onClick={() => {}}
                primary
              />
              <Button
                icon={<Edit />}
                label="Edit"
              
                onClick={() => {}}
              />
            </Box>           
          </div>          */}
        </Box>
        
        <Grid
          rows={['full']}
          columns={['2/3', 'flex']}
          gap="small"
          pad='small'
          areas={[              
            { name: 'nav', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
          ]}
        >
          {/* <Box gridArea="header" background="brand" /> */}
          <Box 
            gridArea="nav" 
            pad='medium' 
            border={{
              color: 'accent-1',
              size: 'small'
            }}
          >
            <Form onSubmit={({ value }) => {}}>
              <FormField name="name" label="Name">
                <TextInput name="name" />
              </FormField>
              <FormField name="name" label="Otro name">
                <TextInput name="name" />
              </FormField>
              <FormField name="name" label="Last name">
                <TextInput name="name" />
              </FormField>
              <Box direction="row" pad={{ top: 'medium' }} gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
              </Box>
            </Form>
          </Box>
          <Box gridArea="main" flex direction='column' justify='between' pad='medium' background="brand">
            <div>
              <Text size="large">
                Data Falopa
              </Text>
            </div>
            <div>
            <Chart
              bounds={[[0, 7], [0, 100]]}
              values={[
                { value: [7, 100], label: 'one hundred' },
                { value: [6, 70], label: 'seventy' },
                { value: [5, 60], label: 'sixty' },
                { value: [4, 80], label: 'eighty' },
                { value: [3, 40], label: 'forty' },
                { value: [2, 0], label: 'zero' },
                { value: [1, 30], label: 'thirty' },
                { value: [0, 60], label: 'sixty' },
              ]}
              aria-label="chart"
            />
            </div>
          </Box>
        </Grid>      
      </div>
      <div>
        <Footer background="brand" pad="medium">
          <Text>Copyright juancito</Text>
          <Anchor label="About" />
        </Footer>
      </div>
    </Grommet>    
  )
}

export default GrommetHome