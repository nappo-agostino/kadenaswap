import React, {useEffect, useState, useContext} from "react";
import styled from "styled-components/macro";
import {Message, Divider, Dimmer, Loader} from "semantic-ui-react";
import FormContainer from "../../components/shared/FormContainer";
import Input from "../../components/shared/Input";
import InputToken from "../../components/shared/InputToken";
import ButtonDivider from "../../components/shared/ButtonDivider";
import Button from "../../components/shared/Button";
import cryptoCurrencies from "../../constants/tokens";
import TokenPair from "./TokenPair";
import {PactContext} from "../../contexts/PactContext";
import {reduceBalance} from "../../utils/reduceBalance";
import theme from "../../styles/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 13px;
  }

  & > *:not(:first-child):not(:last-child) {
    margin-right: 14px;
  }
  @media (min-width: ${({theme: {mediaQueries}}) =>
      mediaQueries.mobileBreakpoint}) {
    & > *:not(:first-child):not(:last-child) {
      margin-right: 16px;
    }
  }
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const MessageContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  & > span:first-child {
    margin-bottom: 16px;
  }
`;
const Title = styled.span`
  font-size: 24px;
  font-family: neue-bold;
  color: ${({theme: {colors}}) => colors.whiteSmoke};
`;

const Text = styled.span`
  font-size: 16px;
  font-family: neue-regular;
  color: ${({theme: {colors}}) => colors.whiteSmoke};
`;

const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  & > button:first-child {
    margin-right: 26px;
  }
`;

const LiquidityList = (props) => {
  const pact = useContext(PactContext);

  useEffect(async () => {
    pact.getPairListAccountBalance(pact.account.account);
  }, [pact.account.account]);

  return (
    <ColumnContainer>
      {pact.account.account !== null && (
        <FormContainer
          title="Your Liquidity"
          wrapperStyle={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <RightContainer>
            <Button
              disabled
              buttonStyle={{marginLeft: 24}}
              onClick={() => props.selectCreatePair()}
            >
              Create a pair
            </Button>
            <Button onClick={() => props.selectAddLiquidity()}>
              Add Liquidity
            </Button>
          </RightContainer>
          <Divider />
          {pact.account.account !== null ? (
            pact.pairListAccount[0] ? (
              Object.values(pact.pairListAccount).map((pair) => {
                return pair ? (
                  <TokenPair
                    key={pair.name}
                    pair={pair}
                    selectAddLiquidity={props.selectAddLiquidity}
                    selectRemoveLiquidity={props.selectRemoveLiquidity}
                    setTokenPair={props.setTokenPair}
                  />
                ) : (
                  ""
                );
              })
            ) : (
              <Dimmer active inverted>
                <Loader>Loading</Loader>
              </Dimmer>
            )
          ) : (
            <Message>Connect an account to view your liquidity</Message>
          )}
        </FormContainer>
      )}
      {!pact?.account?.account && (
        <Title
          style={{width: "100%", justifyContent: "flex-start", fontSize: 32}}
        >
          Your Liquidity
        </Title>
      )}
      <MessageContainer>
        <Title>Liquidity provider rewards</Title>
        <Text>
          Liquidity providers earn a 0.3% fee on all trades proportional to
          their share of the pool.
        </Text>
        <Text>
          Fees are added to the pool, accrue in real time and can be claimed by
          withdrawing your liquidity.
        </Text>
      </MessageContainer>
      {!pact?.account?.account && (
        <ButtonsContainer>
          <Button background="#CDCDCD">Create a pair</Button>
          <Button
            background={theme.colors.lightBlue}
            onClick={props.selectAddLiquidity}
          >
            Add Liquidity
          </Button>
        </ButtonsContainer>
      )}
      {/* <Message style={{marginBottom: 40, textAlign: "center"}}>
        <Message.Header>Liquidity provider rewards</Message.Header>
        <br />
        <Message.Content>
          Liquidity providers earn a 0.3% fee on all trades proportional to
          their share of the pool.
        </Message.Content>
        <Message.Content>
          Fees are added to the pool, accrue in real time and can be claimed by
          withdrawing your liquidity.
        </Message.Content>
      </Message> */}
    </ColumnContainer>
  );
};

export default LiquidityList;
