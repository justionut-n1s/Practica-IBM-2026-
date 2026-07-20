import { Button, Icon, Image, Text, Hyperlink, Card, Heading } from './components/atoms'

function App() {
  return (
    <>
      <Heading lvl={1}>Welcome to Nest</Heading>
      <Heading lvl={3}>Who we are</Heading>
      <Image
        src="https://placehold.co/200x150"
        alt="poza test"
        width={200}
        height={150}
        rounded={true}
      />
      <Button>Subscribe</Button>
      <Icon
        src="https://placehold.co/40"
        alt="Icon test"
        size={40}
      />
      <Text message="The quick brown fox jumps over the lazy dog"/>
      <Hyperlink message="Place Hold" link="https://placehold.co/"/>
      <Card>
        <Text>Test card content</Text>
      </Card>
    </>
  )
}

export default App