import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import {createStyles, Paper, Text, Title, Button, useMantineTheme, Group, Container} from '@mantine/core';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontWeight: 900,
    color: "#25363c",
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: "#1b283d",
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})`,backgroundColor: "rgba(217, 217, 217,0.65)", backgroundBlendMode: "lighten"}}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="sm">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}

const data = [
  {
    image:
      '/public/miyajima.jpg',
    title: '宮島 紅葉谷の紅葉',
    category: '廿日市市 宮島町',
  },
  {
    image:
      '/public/fukuyama.jpg',
    title: '新幹線から見える福山城',
    category: '福山市',
  },
  {
    image:
      '/public/takehara.jpg',
    title: '安芸の小京都 竹原',
    category: '竹原市 町並み保存地区',
  },
  {
    image:
      '/public/ekimae.jpg',
    title: '広島駅前の風景',
    category: '広島市',
  },
  {
    image:
      '/public/hondori-eki.jpg',
    title: '本通駅 ステンドグラス',
    category: '広島市 中区',
  },
  {
    image:
      '/public/kamiyacho.jpg',
    title: '広島そごうと紙屋町交差点',
    category: '広島市 中区',
  },
  {
    image:
      '/public/buscenter.jpg',
    title: '日本初のバスセンター',
    category: '広島バスセンター',
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container w="90%" mt="3em">
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
