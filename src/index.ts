import './styles/index.scss';

// ------------------------ Компоненты ---------------------------------------------------------------------------
import Avatar from './components/atoms/Avatar';
import Badge from './components/atoms/Badge';
import Button from './components/atoms/Button';
import ButtonPages from './components/atoms/ButtonPages';
import Checkbox from './components/atoms/Checkbox';
import Chip from './components/atoms/Chip';
import Datepicker from './components/atoms/Datepicker';
import FormGroup from './components/atoms/FormGroup';
import Hint from './components/atoms/Hint';
import Input from './components/atoms/Input';
import InputFile from './components/atoms/InputFile';
import InputNumber from './components/atoms/InputNumber';
import Menu from './components/atoms/Menu';
import Modal from './components/atoms/Modal';
import Preloader from './components/atoms/Preloader';
import Radio from './components/atoms/Radio';
import RatePicker from './components/atoms/RatePicker';
import Search from './components/atoms/Search';
import Segment from './components/atoms/Segment';
import Select from './components/atoms/Select';
import Switch from './components/atoms/Switch';
import Tabs from './components/atoms/Tabs';
import Tag from './components/atoms/Tag';
import Textarea from './components/atoms/Textarea';
import Tooltip from './components/atoms/Tooltip';
import OrgTree from './components/molecules/OrgTree';
import FatalError from './components/molecules/FatalError';
import CompletePopup from './components/popups/CompletePopup';
import Page from './components/pages/Page';
import PageWithSections from './components/pages/PageWithSections';
import FindUsers from './components/popups/FindUsers';
import Structure from './components/molecules/Structure';
import CertReader from './components/molecules/CertReader';
import PDFViewer from './components/molecules/PDFViewer';
import Employee from './components/molecules/Employee';
import Tile from './components/atoms/Tile';
import Column from './components/atoms/Column';
import Row from './components/atoms/Row';
import UserPhoto from './components/atoms/UserPhoto';
import Notification from './components/molecules/Notification';
import Notifications, { sendNotification } from './components/molecules/Notifications';

import { InputHook } from './components/atoms/Input/InputHook';
import Timepicker from './components/atoms/Timepicker';
import Confirm from './components/popups/Confirm';

export {
  Avatar,
  Badge,
  Button,
  Checkbox,
  Chip,
  Datepicker,
  FormGroup,
  Hint,
  Input,
  InputFile,
  InputNumber,
  Menu,
  Modal,
  Preloader,
  Radio,
  RatePicker,
  Search,
  Segment,
  Select,
  Switch,
  Tabs,
  Tag,
  Textarea,
  Tooltip,
  OrgTree,
  CompletePopup,
  FatalError,
  Page,
  PageWithSections,
  InputHook,
  Timepicker,
  FindUsers,
  Structure,
  PDFViewer,
  CertReader,
  ButtonPages,
  Notification,
  Notifications,
  sendNotification,
  Employee,
  Confirm,
  Tile,
  Row,
  Column,
  UserPhoto
};

// --------------------------Иконки-------------------------------------------------------------------------------------

import Close from './assets/icons/Close';
import Refresh from './assets/icons/Refresh';
import SearchIcon from './assets/icons/Search';
import Success from './assets/icons/Success';
import Reduce from './assets/icons/Reduce';
import ChevronDown from './assets/icons/ChevronDown';
import ChevronLeft from './assets/icons/ChevronLeft';
import Info from './assets/icons/Info';
import Calendar from './assets/icons/Calendar';
import Up from './assets/icons/Up';
import Eye from './assets/icons/Eye';
import EyeClose from './assets/icons/EyeClose';
import TuneUp from './assets/icons/TuneUp';
import People from './assets/icons/People';
import Gaming from './assets/icons/Gaming';
import Help from './assets/icons/Help';
import KebabMenu from './assets/icons/KebabMenu';
import Copy from './assets/icons/Copy';
import CircleAlt from './assets/icons/CircleAlt';
import CircleConfirm from './assets/icons/CircleConfirm';
import CircleReject from './assets/icons/CircleReject';
import Circle from './assets/icons/Circle';
import Time from './assets/icons/Time';

export {
  Refresh,
  Close,
  SearchIcon,
  Success,
  Reduce,
  ChevronDown,
  Info,
  Calendar,
  ChevronLeft,
  Up,
  Eye,
  EyeClose,
  TuneUp,
  People,
  Gaming,
  Help,
  KebabMenu,
  Copy,
  CircleAlt,
  CircleConfirm,
  CircleReject,
  Circle,
  Time
};

// --------------------------Переменные---------------------------------------------------------------------------------
import variables from './styles/variables.json';
import { download } from './utils/download';

export { variables, download };
