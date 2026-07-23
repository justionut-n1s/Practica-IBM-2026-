import { Button, Icon, Image, Text, Hyperlink, Card, Heading, PriceTag } from './components/atoms'

// test rapid, verific tot ce am facut pana acum

function App() {
  return (
    <>
      <Heading lvl={1}>Test</Heading>
      <Heading lvl={2}>Test</Heading>
      <Heading lvl={3}>Test</Heading>
      <Heading lvl={4}>Test</Heading>
      <Heading lvl={2} light>Test - light</Heading>


      <Image src="https://placehold.co/200x150" alt="poza test" width={200} height={150} />
      <Image src="https://placehold.co/200x150" alt="poza test rotunda" width={200} height={150} rounded />

      <Icon src="https://placehold.co/40" alt="icon test" size={40} />
      <Icon src="https://placehold.co/20" alt="icon mic" size={20} />

      <Hyperlink message="PlaceHold" link="https://placehold.co/" />

      < PriceTag  price="$28.85" oldPrice="$32.80" />

      <Card>
        <Text>test card content</Text>
        
      </Card>
      <Card variant="flat">
        <Text>card flat test</Text>
        <Button>ok</Button>
      </Card>
    </>
  )
}

export default App