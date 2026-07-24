import { Button, Icon, Image, Text, Hyperlink, Card, Heading, PriceTag } from './components/atoms'
import { ProductCard } from './components/molecules'

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
        <Text variant="header1" type="p">test card content</Text>
        
      </Card>
      <Card variant="flat">
        <Text variant="header1" type="p">card flat test</Text>
        <Button variant="add-button" onClick={() => {}}>ok</Button>
      </Card>
      <ProductCard imageSrc='https://placehold.co/200x200' name='Produs Test' category='Test' provider='PLACEHOLD' rating={3.2} price='25.25' oldPrice='30' badgeText='NEW' badgeVariant='green'/>
      
    </>
  )
}

export default App