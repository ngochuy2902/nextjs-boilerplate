import styled from 'styled-components';
import { Button } from 'antd';
// import "antd/es/button/style/css";

export const ButtonStyled = styled(Button)`
  &.ant-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: none;
    border-radius: 4px;
    transition: background-color 0.2s;
    height: 44px;
    font-weight: bold !important;

    &.ant-btn-primary {
      background-color: blue;
      color: white;
      border: none;
      font-size: 14px;

      &:hover {
        background-color: blue;
        color: white;
      }

      &:active {
        background-color: blue;
      }

      &:focus {
        background-color: blue;
        color: white;

        &:hover {
          background-color: blue;
        }

        &:active {
          background-color: blue;
        }
      }
    }

    &.ant-btn-warning {
      background-color: #ffbf43;
      color: #452e00;
      border: none;

      &:hover {
        background-color: #ffbf43;
        color: #452e00;
      }

      &:active {
        background-color: #ffbf43;
      }

      &:focus {
        background-color: #ffbf43;
        color: #452e00;

        &:hover {
          background-color: #ffbf43;
        }

        &:active {
          background-color: #ffbf43;
        }
      }
    }

    &.ant-btn-basic {
      background-color: #e1e1e1;
      color: #3c492f;
      border: none;

      &:hover {
        background-color: #e1e1e1;
        color: #3c492f;
        border: none;
      }

      &:active {
        background-color: #e1e1e1;
        color: #3c492f;
        border: none;
      }

      &:focus {
        background-color: #e1e1e1;
        color: #3c492f;
        border: none;

        &:hover {
          background-color: #e1e1e1;
          color: #3c492f;
          border: none;
        }

        &:active {
          background-color: #e1e1e1;
          color: #3c492f;
          border: none;
        }
      }
    }

    &:disabled,
    &:disabled:hover {
      background: blue;
    }

    &.ant-btn-sm {
      padding: 0 10px;
      font-size: 13px;
    }
    &.button-search {
      height: 44px;
      width: 103px;
      border-radius: 0 3px 3px 0;
      background: #1890ff;
      border-color: #1890ff;
    }
  }
`;
