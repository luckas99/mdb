import React, { useContext } from "react";
import brand from "../mdb.png";
import styled from "styled-components";

// Our Context
import { Context } from "../Context";

// Set the component to use in HOC schema
const Root = ({ children, ...props }) => {
  /* By Consumer we can access the context data without prop drilling  */
  const data = useContext(Context);

  return (
    <Container>
      {children}

      <img src={brand} alt="MDB Brand" />

      <h1>{data.context.title}</h1>
      <h3>By context</h3>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla
        volutpat eros at fringilla. Sed ut consectetur est. Praesent
        pellentesque eget augue in sollicitudin. Cras felis massa, elementum
        quis venenatis in, fermentum quis urna. Vivamus quis pharetra tellus,
        eget posuere sem. Phasellus facilisis cursus felis, non sagittis metus
        consectetur nec. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>

      <p>
        Ut porta justo eu velit luctus accumsan. Integer sit amet lectus at sem
        posuere fringilla. Ut mollis dui non tincidunt suscipit. Aliquam quis
        dapibus velit. Morbi vel imperdiet lorem. Integer sodales tortor lacus,
        at euismod nisl eleifend sit amet. Nam non nibh ante. Vivamus et libero
        fermentum, molestie dolor vel, maximus justo. Nam non gravida lorem. In
        posuere at dui in pharetra. Vestibulum sed nisi et ligula posuere
        laoreet. Sed aliquam molestie risus, vel vehicula mauris ultricies
        lacinia. Duis fermentum sollicitudin elit id tempor. Sed sed iaculis
        neque, in fermentum odio. Ut cursus sapien eget maximus euismod.
      </p>

      <p>
        Cras tincidunt libero in tellus viverra, nec egestas nisi semper.
        Maecenas quis egestas lectus. Mauris eu vehicula massa, vel dictum
        augue. Morbi nec lectus diam. Curabitur ut elit nec purus viverra
        suscipit quis vel risus. Donec a viverra nisi, vitae condimentum arcu.
        Donec eget faucibus justo. Nullam malesuada leo et felis congue, vitae
        aliquet velit lobortis. Nullam in porta mauris. Integer et facilisis
        turpis. Nulla sit amet facilisis arcu, non ullamcorper purus. Nulla
        scelerisque sapien in lacinia rhoncus. In hac habitasse platea dictumst.
        Duis gravida gravida tellus et sollicitudin. Proin ut iaculis quam.
        Pellentesque bibendum velit sed congue semper.
      </p>

      <p>
        Cras dapibus sem at neque elementum, vel facilisis ipsum faucibus.
        Aenean massa diam, ultricies eu ex quis, viverra ullamcorper nisi. In
        hac habitasse platea dictumst. Curabitur sollicitudin tristique tortor
        eget pellentesque. Curabitur aliquam tortor nisi. Duis tellus eros,
        interdum nec massa ut, mattis ultrices ante. Cras et diam congue velit
        malesuada rutrum. Suspendisse quis mi eu nulla faucibus tincidunt
        imperdiet vel sem. Maecenas vitae massa erat. Phasellus vitae egestas
        ex.
      </p>

      <p>
        Quisque convallis libero et nunc faucibus, nec scelerisque lacus
        scelerisque. Praesent rhoncus et leo vitae consequat. Suspendisse
        fermentum varius dui id vehicula. Nulla facilisi. Aliquam erat volutpat.
        Duis metus ipsum, cursus in massa ut, blandit molestie tellus. Nam
        porttitor dui non auctor scelerisque. Vestibulum non lacus ac urna
        ultricies consequat quis vel dui. Duis a vestibulum tortor, at blandit
        mauris. Nullam sit amet pharetra elit, nec posuere magna.
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.paragraph_color};
  width: 960px;
  height: 100vh;

  & p {
    margin: 2vh 0;
  }

  & img {
    width: 150px;
    border-radius: 40px;
  }

  & h1 {
    text-transform: uppercase;
    margin-bottom: 0;
  }
`;

export default Root;
