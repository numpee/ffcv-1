Search.setIndex({docnames:["api/decoders","api/fields","api/loader","api/transforms","api/writer","api_reference","basics","benchmarks","bottleneck_doctor","examples","ffcv_examples/cifar10","ffcv_examples/custom_transforms","ffcv_examples/imagenet","ffcv_examples/linear_regression","ffcv_examples/transform_with_inds","index","making_dataloaders","parameter_tuning","performance_guide","quickstart","working_with_images","writing_datasets"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/decoders.rst","api/fields.rst","api/loader.rst","api/transforms.rst","api/writer.rst","api_reference.rst","basics.rst","benchmarks.rst","bottleneck_doctor.rst","examples.rst","ffcv_examples/cifar10.rst","ffcv_examples/custom_transforms.rst","ffcv_examples/imagenet.rst","ffcv_examples/linear_regression.rst","ffcv_examples/transform_with_inds.rst","index.rst","making_dataloaders.rst","parameter_tuning.rst","performance_guide.rst","quickstart.rst","working_with_images.rst","writing_datasets.rst"],objects:{"ffcv.fields":[[1,1,1,"","BytesField"],[1,1,1,"","Field"],[1,1,1,"","FloatField"],[1,1,1,"","IntField"],[1,1,1,"","JSONField"],[1,1,1,"","NDArrayField"],[1,1,1,"","RGBImageField"],[0,0,0,"-","decoders"]],"ffcv.fields.BytesField":[[1,2,1,"","encode"],[1,2,1,"","from_binary"],[1,2,1,"","get_decoder_class"],[1,3,1,"","metadata_type"],[1,2,1,"","to_binary"]],"ffcv.fields.Field":[[1,2,1,"","encode"],[1,2,1,"","from_binary"],[1,2,1,"","get_decoder_class"],[1,3,1,"","metadata_type"],[1,2,1,"","to_binary"]],"ffcv.fields.FloatField":[[1,2,1,"","encode"],[1,2,1,"","from_binary"],[1,2,1,"","get_decoder_class"],[1,3,1,"","metadata_type"],[1,2,1,"","to_binary"]],"ffcv.fields.IntField":[[1,2,1,"","encode"],[1,2,1,"","from_binary"],[1,2,1,"","get_decoder_class"],[1,3,1,"","metadata_type"],[1,2,1,"","to_binary"]],"ffcv.fields.JSONField":[[1,2,1,"","encode"],[1,3,1,"","metadata_type"],[1,2,1,"","unpack"]],"ffcv.fields.NDArrayField":[[1,2,1,"","encode"],[1,2,1,"","from_binary"],[1,2,1,"","get_decoder_class"],[1,3,1,"","metadata_type"],[1,2,1,"","to_binary"]],"ffcv.fields.RGBImageField":[[1,2,1,"","encode"],[1,2,1,"","from_binary"],[1,2,1,"","get_decoder_class"],[1,3,1,"","metadata_type"],[1,2,1,"","to_binary"]],"ffcv.fields.decoders":[[0,1,1,"","BytesDecoder"],[0,1,1,"","CenterCropRGBImageDecoder"],[0,1,1,"","FloatDecoder"],[0,1,1,"","IntDecoder"],[0,1,1,"","NDArrayDecoder"],[0,1,1,"","RandomResizedCropRGBImageDecoder"],[0,1,1,"","SimpleRGBImageDecoder"]],"ffcv.fields.decoders.BytesDecoder":[[0,2,1,"","declare_state_and_memory"],[0,2,1,"","generate_code"]],"ffcv.fields.decoders.CenterCropRGBImageDecoder":[[0,3,1,"","get_crop_generator"]],"ffcv.fields.decoders.FloatDecoder":[[0,4,1,"","dtype"]],"ffcv.fields.decoders.IntDecoder":[[0,4,1,"","dtype"]],"ffcv.fields.decoders.NDArrayDecoder":[[0,2,1,"","declare_state_and_memory"],[0,2,1,"","generate_code"]],"ffcv.fields.decoders.RandomResizedCropRGBImageDecoder":[[0,3,1,"","get_crop_generator"]],"ffcv.fields.decoders.SimpleRGBImageDecoder":[[0,2,1,"","declare_state_and_memory"],[0,2,1,"","generate_code"]],"ffcv.loader":[[2,1,1,"","Loader"],[2,1,1,"","OrderOption"]],"ffcv.loader.Loader":[[2,2,1,"","filter"],[2,2,1,"","generate_code"],[2,2,1,"","generate_function_call"],[2,2,1,"","generate_stage_code"],[2,2,1,"","next_traversal_order"]],"ffcv.loader.OrderOption":[[2,4,1,"","QUASI_RANDOM"],[2,4,1,"","RANDOM"],[2,4,1,"","SEQUENTIAL"]],"ffcv.transforms":[[3,1,1,"","Convert"],[3,1,1,"","Cutout"],[3,1,1,"","ImageMixup"],[3,1,1,"","LabelMixup"],[3,1,1,"","MixupToOneHot"],[3,1,1,"","ModuleWrapper"],[3,1,1,"","NormalizeImage"],[3,1,1,"","Poison"],[3,1,1,"","RandomHorizontalFlip"],[3,1,1,"","RandomResizedCrop"],[3,1,1,"","RandomTranslate"],[3,1,1,"","ReplaceLabel"],[3,1,1,"","Squeeze"],[3,1,1,"","ToDevice"],[3,1,1,"","ToTensor"],[3,1,1,"","ToTorchImage"],[3,1,1,"","View"]],"ffcv.transforms.Convert":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.Cutout":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.ImageMixup":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.LabelMixup":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.MixupToOneHot":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.ModuleWrapper":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.NormalizeImage":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"],[3,2,1,"","generate_code_cpu"],[3,2,1,"","generate_code_gpu"]],"ffcv.transforms.Poison":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.RandomHorizontalFlip":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.RandomResizedCrop":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.RandomTranslate":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.ReplaceLabel":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.Squeeze":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.ToDevice":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.ToTensor":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.ToTorchImage":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.transforms.View":[[3,2,1,"","declare_state_and_memory"],[3,2,1,"","generate_code"]],"ffcv.writer":[[4,1,1,"","DatasetWriter"],[4,5,1,"","count_samples_in_shard"],[4,5,1,"","from_shard"],[4,5,1,"","handle_sample"],[4,5,1,"","worker_job_indexed_dataset"],[4,5,1,"","worker_job_webdataset"]],"ffcv.writer.DatasetWriter":[[4,2,1,"","finalize"],[4,2,1,"","from_indexed_dataset"],[4,2,1,"","from_webdataset"],[4,2,1,"","prepare"]],ffcv:[[1,0,0,"-","fields"],[2,0,0,"-","loader"],[3,0,0,"-","transforms"],[4,0,0,"-","writer"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","property","Python property"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:property","4":"py:attribute","5":"py:function"},terms:{"0":[0,1,3,10,11,13,14,16,19,20],"00":7,"000":13,"007":11,"01":7,"02703":11,"02828":11,"03404":11,"04":[7,11],"04552":3,"05":14,"06596":11,"08":0,"1":[0,2,3,4,7,11,13,16,18,20],"10":[9,13,14,15,16,20,21],"100":[4,7,8,10,11,21],"10000":13,"1000000":13,"102":7,"1024":1,"11":15,"110":7,"113":10,"120":7,"122":10,"124":7,"125":10,"128":10,"14":7,"15":[7,20],"16":[7,11,13,21],"1600px":7,"16631":7,"169":7,"1708":3,"172801":7,"173":7,"176":7,"18":7,"1956":7,"198":7,"1d":1,"1f":10,"1xa100":7,"2":[2,11,13,15,16,18],"20":7,"202":7,"2022":15,"2048":13,"21":7,"22":7,"221":7,"224":[19,20],"224x224":7,"23":7,"24":10,"24xlarg":7,"25":20,"251":7,"255":[3,10],"256":[7,10,19,20],"256px":7,"26":7,"285":7,"29":7,"2f":13,"3":[2,11,15,21],"30":7,"307":10,"31":7,"31278":7,"32":11,"3333333333333333":0,"35":[7,15],"350":7,"36":[7,9,15,16],"371":7,"384px":7,"3f":13,"4":[7,11,16,20],"40":[7,21],"40gb":13,"43":7,"46":7,"47":7,"49":7,"4f":11,"5":[1,3,10],"50":[7,10,20],"50000":10,"51":10,"512":[7,10,11],"512px":7,"53":7,"57":7,"58":7,"5865":10,"59":7,"5e":[10,13],"5x":11,"6":[10,13,21],"616":7,"64":10,"65":7,"66":7,"67":7,"6870":7,"6x":11,"72":7,"74":7,"75":[0,7],"76":7,"788":7,"79":7,"8":[7,10,11,13],"8388608":4,"84":7,"847":10,"8575":10,"8xa100":7,"9":[7,10,15],"90":[1,7],"91":7,"92":[7,10],"961":10,"97":7,"98":[7,15],"abstract":1,"boolean":11,"byte":[1,21],"case":[1,3,7,16,17,18,21],"class":[0,1,2,3,4,10,11,13,14,16,17,20,21],"default":[0,1,2,3,7,8,16,20,21],"do":[11,13,15,16,17,20],"enum":16,"final":[3,4,9,10,16],"float":[0,1,3,21],"function":[1,2,8,14,17,21],"import":[7,10,11,13,16,19,21],"int":[0,1,2,3,4,10,21],"long":[7,16],"new":[3,11],"return":[1,10,11,13,14,16,21],"static":1,"super":[10,16],"switch":17,"throw":16,"true":[2,3,10,11,13,14,16,17],"try":[8,13,17],"while":[1,2,7,8,11,17,20],A:[1,7,16,21],As:[7,11,12,13,17],At:11,But:16,By:[1,15],For:[2,7,10,11,15,16,17,20,21],If:[1,3,8,15,16,17],In:[6,7,10,11,13,16,17,18,20,21],It:[0,1,10,11,13,16,17,20],No:14,One:17,Such:[7,21],That:[11,13,21],The:[0,1,3,7,9,11,13,15,16,17,18,20,21],Then:19,There:16,These:16,To:[7,8,11,17],With:[11,13,15],_:[11,13,14],__getitem__:[4,10,13,21],__init__:[10,16,21],__len__:[4,13,21],a100:[7,9,13,15,16],a3:7,ab:3,abil:15,abl:[17,21],abound:11,about:[7,15,18,20],abov:[7,10,11,13,14,15,16,17,20,21],absorb:16,abstractmethod:11,acceler:[7,8,12,19],access:[14,15,17,20,21],accomplish:[11,13],account:15,accur:[9,12],accuraci:[7,10],achiev:[17,20],across:3,act:11,activ:15,actual:[1,2,11],ad:[3,11,16],adapt:15,adaptivemaxpool2d:10,add:[7,10,16],addgaussiannois:16,addit:[11,16],addition:21,adjust:15,advanc:[2,15,16,17],advantag:15,after:[7,16,21],again:8,against:7,aggreg:7,agre:17,ahead:[16,17],aleksand:15,algorithm:[13,15],all:[7,8,15,16,17,20,21],alloc:[4,8,14],allocation_queri:[0,3,11],allocationqueri:[0,3,11,14],allocations_queu:4,allow:[8,12,13,17,20,21],alpha:3,alreadi:[16,20,21],also:[2,7,8,10,11,13,14,15,16,17,20,21],altern:[8,13,20],alwai:[8,11],among:8,amount:[2,7,16,17],amp:10,an:[1,2,3,4,6,7,8,11,12,13,14,15,17,20,21],analyz:15,andrew:15,ani:[1,2,3,8,10,11,13,15,16,19,21],anoth:[7,8,14],anyth:[11,20],anywai:[8,17],api:[16,20],appli:[2,3,7,13,16,17,20],applic:[15,16,20],appropri:8,ar:[1,2,7,8,10,11,13,14,15,16,17,20,21],arang:10,archiv:7,area:[0,3,20],arg_typ:1,argmax:10,argument:[1,8,11,14,16,20],around:[11,17],arrai:[1,3,11,13,21],arxiv:3,ask:[11,14],aspect:[0,3,15,20],assign:[3,11,14],associ:[2,21],assum:[7,16,17,20,21],astyp:[13,21],asynchron:[3,8,15,17],attach:7,attribut:[1,11],augment:[2,3,8,10,11,14,15,16,19],author:15,autocast:10,automat:[15,16],avail:[7,15,16,21],averag:13,avoid:[8,15,17,21],aw:[7,15],b:[3,11,13],b_est:13,b_grad:13,back:[1,7,16],backward:10,bad:13,balanc:2,bare:[13,16],base:[1,2,4,8,13,15,17,20],baselin:7,basi:16,basic:[0,15],batch:[1,2,3,11,14,16,20],batch_siz:[2,10,11,13,16,19,20],batches_ahead:[2,16],batchnorm2d:10,batchnorm:17,becaus:[1,8,14,17],becom:13,been:[16,17],befor:[1,7,10,20],behav:17,behavior:[2,16,20],being:[7,8,11],below:[7,11,14,15,16,21],benchmark:15,benefici:[2,17,20],benefit:2,best:[17,20],beton:[2,4,10,11,13,16,19,20,21],better:[13,17],between:[1,3,7,15,17,20,21],beyond:[15,21],bia:10,big:7,bigger:17,binari:1,bit:[16,17,18],block:[8,11,20],bodi:1,bone:16,bool:[2,3,4],both:[0,1,3,8,10,11,17,19,20,21],bottleneck:[13,15,18,20],bottom:11,bound:[1,3,7],box:1,briefli:11,bs:19,bug:17,build:11,built:[13,21],bulk:15,bytesdecod:0,bytesfield:[1,21],c:[3,11,15],cach:[2,7,8,13,15,16,17,20],calcul:13,calculate_stat:13,call:[1,4,7,17,21],callabl:[0,2,3,4,11,14],can:[0,1,2,3,8,10,11,12,13,14,15,16,17,20,21],cannot:11,care:11,categori:21,cater:20,caus:17,center:0,centercrop:20,centercroprgbimagedecod:[0,20],ch:[10,13,16],chain:11,chang:[2,3,11,15,16,19],channels_in:10,channels_last:[3,10],channels_out:10,check:[8,11],choic:17,choos:20,chunk:4,chunksiz:4,cifar10:[10,11],cifar:[9,11,15,16,21],cifar_:10,cifar_mean:10,cifar_std:10,cite:15,cl:21,cla:3,clamp:3,classifi:10,clean:13,cluster:7,code:[7,8,10,11,15,16,17,19,20],collect:21,color:3,colorjitt:16,com:15,come:[7,8],commit:15,common:[10,17,18],compar:7,comparison:7,compat:1,compil:[8,11,14,15,16],complet:[6,7,15,17],compon:10,compress:[1,15,20,21],compress_prob:[1,20],compris:[1,4],comput:[8,11,15,17,20],concept:18,concern:11,conclud:13,concurr:[8,15,17],conda:15,condit:[2,7],confid:7,config:15,configur:[7,20],conjug:13,consid:[2,8,16,17],consist:[2,7,10],constant:0,constrain:15,construct:[8,10,11,16,21],constructor:8,consum:20,consumpt:17,contain:[9,11,12,14,20],continu:16,control:20,conv2d:10,conv_bn:10,convers:[1,3,4,16,21],convert:[1,3,6,10,16,19,21],convert_back_int16:3,copi:3,core:[2,7,13],correct:[7,13],correspond:[10,11,13,14,16,21],corrupt:14,corrupt_fix:14,corruptfixedlabel:14,cost:8,could:[16,21],count_samples_in_shard:4,counterpart:[11,21],coupl:[17,18],covari:[13,16,21],cover:[7,9],cpu:[3,10,11,13,17,18,20],creat:[15,16,17],critic:17,crop:[0,3,7,8,19],crop_siz:3,cross:10,crossentropyloss:10,cuda:[10,13,16,17],cudatoolkit:15,cudnn:17,cupi:15,current:[2,17,20],custom:[2,8,9,10,15,16,21],custom_field:[2,16],cut:[3,11],cutmix:15,cutout:[3,10,16,19],cyclic:10,d:[13,21],dali:7,data:[1,2,3,6,8,9,11,13,15,16,17,18,19,21],dataclass:11,dataload:[1,6,7,10,11,13,15,17,19,21],dataparallel:17,datapoint:11,dataset:[0,1,2,4,6,8,11,14,15,18,19],datasetwrit:[4,8,10,11,13,19,20,21],datatyp:11,ddp:7,decid:[1,11],declar:16,declare_state_and_memori:[0,3,11,14],decod:[1,2,4,5,8,10,13,15,16,19,21],decompress:0,decreas:[8,16],dedic:15,deeplearningexampl:7,def:[10,11,13,14,16,21],defin:[1,2,10,21],definit:13,delai:15,demonstr:7,depend:[11,13,16],deploi:19,descent:13,desir:[0,3,8],dest_ix:4,destin:1,detail:[7,10,12,13,15,18,19,20],detect:1,determin:[1,16],determinist:14,develop:[7,17],deviat:3,devic:[3,11,13,15],dgx:7,dict:[1,21],dictionari:[2,16,21],dictonari:2,did:11,didn:13,diff:13,differ:[8,10,15,16,17,20],dim:[3,13],dimens:[3,13],dimension:1,direct:3,directli:[17,21],disabl:[2,13,17],discuss:[13,16],disk:[2,13,15,18],dissect:11,distil:18,distinct:7,distribut:[2,8,16,17],distributeddataparallel:17,distributedsampl:[2,17],divid:7,doc:[2,4],dockerfil:15,doctor:[15,18,20],document:[11,21],doe:[1,8,11,16],doesn:[13,17],don:[2,8,14,15],done:[10,11,21],done_numb:4,download:[10,11],downstream:11,dramat:[13,15,20],drive:[7,8],drop:[2,15,16],drop_last:[2,10,11,16],dropout:15,ds:[10,11,19],dst:[11,14],dtype:[0,1,3,11,13,21],dump:13,dure:[2,4],e:[1,2,4,7,8,11,15,16],each:[1,2,3,4,7,8,11,13,14,16,17,19,20,21],earlier:11,eas:9,easi:[15,16,21],easier:7,easili:[15,21],eb:7,edit:11,effici:[8,15,16,17,20],either:[1,8,11,15],element:21,els:11,elsewher:13,emphas:17,emul:2,enabl:[8,15,17],encod:[1,7,15,16,21],encount:[7,17],encourag:17,end:[8,15],engstrom:15,enough:[2,16,17,20],ensur:[8,15,20],entir:[1,8,12,13,16,17,20],entireti:20,entri:[1,2,16],entropi:10,enumer:2,environ:13,ep:10,epoch:[7,10,11,13,14,16,17,19],eq:10,equal:[1,15],equival:3,error:[13,21],especi:8,etc:15,eval:10,evalu:7,even:[7,8,13,21],event:13,everi:[2,11,14,16],everyth:[11,21],everywher:15,exact:13,exactli:3,exampl:[1,7,8,10,11,12,13,14,15,16,20,21],except:[16,17,20],execut:8,exist:[6,7,8,15,16],expect:[1,2,13,21],experi:[7,17],experienc:17,explicitli:[2,16],exploit:8,explor:13,expos:15,extend:[7,10],extra:14,extrapol:7,extrem:[8,15,18],f0:1,f:[10,11,13],fact:[15,16],factori:11,fair:7,fals:[2,4,8,10,13,16,17],familiar:[11,20],fast:[3,8,9,15,16,20,21],faster:[7,8,11,13,15,20],fault:13,featur:14,feel:15,fetch:[15,17],few:[13,15,19,20],fewer:17,ffcv:[5,6,7,8,9,11,12,14,17,18,19],field:[2,4,5,6,10,13,15,16,19,20],field_nam:[2,4],file:[1,2,4,7,10,12,16,20,21],fill:3,filter:2,find:7,fine:[17,18],first:[8,9,10,11,13,16,17,19,20,21],fit:[8,13,15,16,17,20],fix:[1,13,14,17],flag:[11,17],flatten:10,flip:[3,7,10],flip_prob:3,fliplr:10,float16:[3,10,16],float32:[13,21],float64:[0,1],floatdecod:[0,16],floatfield:[1,13,21],fname:[2,4],focus:15,folder:[4,21],follow:[0,3,8,11,13,15,16,17,20,21],footprint:13,forc:16,forg:15,form:11,format:[1,2,3,4,6,7,8,10,11,13,15,19,20],forward:[10,16,17,20],found:[7,15],four:7,fraction:8,framework:7,free:15,freed:8,friendli:15,from:[1,2,3,4,6,7,8,10,11,13,15,16,17,18,19,20,21],from_binari:1,from_indexed_dataset:[4,10,11,13,19,21],from_shard:4,from_webdataset:[4,21],full:[2,13,16,20],fulli:[8,15],further:15,fuse:[8,15],futur:17,g:[1,2,4,8,15,16],gain:9,gaussian:16,gb:7,gener:[7,11,17,18,20,21],generate_cod:[0,2,3,11,14],generate_code_cpu:3,generate_code_gpu:3,generate_function_cal:2,generate_stage_cod:2,get:[8,11,14,15,18,19],get_crop_gener:0,get_decoder_class:1,get_iter:[11,14],giant:8,gigant:8,github:[15,21],give:[1,17,18],given:[1,3,4,7,11,13,20,21],glanc:15,glob:21,glue:21,go:[6,18],goal:13,goe:13,good:[11,17],gpu:[2,3,7,10,11,13,15,16,18],gradient:13,gradscal:10,great:11,grid:[7,18],ground:13,group:10,guess:13,guid:[1,8,11,13,15,16,19,20],guillaum:15,h:[3,11,20],ha:[15,16,17,20,21],hadi:15,half:[7,11],handl:[8,15,21],handle_sampl:4,hardwar:20,have:[1,3,8,11,15,16,17,20,21],haven:17,heavi:16,height:11,held:16,help:[8,11,15,17],here:[1,7,10,11,13,14,17,19,21],high:[11,14],highli:7,hit:8,homepag:15,horizont:[3,7,10],hour:7,how:[1,7,9,10,11,12,13,15,16,18,20,21],howev:[11,21],howpublish:15,html:[2,4],http:[2,3,4,15],hub:7,hurt:17,hybrid:20,hyper:2,hyperparamet:10,i:[7,8,11,14,15,16],idea:[7,13],ident:19,idl:8,idx:[13,21],ignor:1,illustr:[9,21],ilya:15,im:[10,11],imag:[0,1,3,7,8,9,10,14,15,16,18,19,21],image_pipelin:[10,11,16,19],imagemixup:3,imagenet:[9,15,20,21],imit:8,immut:11,impact:[17,20],implement:[1,2,3,4,7,8,13,14,16,17,21],improv:[11,13,17],includ:[8,11,15,16,18,21],incom:16,increas:[13,15,16],ind:14,inde:17,independ:13,index:[4,6,11,14,15,19],indic:[2,3,4,9,16],individu:[3,7],induc:8,ineffici:17,infer:15,influenc:7,info:[11,15],inform:[1,2,6,15,20],initi:[3,13,16,20],inplac:10,input:[3,8,13,21],input_queu:4,insid:11,instal:15,instanc:[7,11,16],instanti:[7,16],instead:[1,2,7,8,21],insuffici:13,int64:0,intdecod:[0,10,19],integ:[0,1],integr:21,intend:[1,20],intens:[8,16],interfac:21,interleav:15,intern:[4,21],interp:10,interv:7,intfield:[1,10,11,19,20,21],introduc:15,invalu:14,invest:17,io:[2,4],ipdb:13,irrelev:11,is_parallel:[11,14],isn:[8,17],issu:17,item:[10,11,13],iter:[2,16],iters_per_epoch:10,its:[2,9,13,17,20,21],itself:[11,13,15],jit:8,jit_mod:11,jite:2,job:17,join:21,jpeg:[1,7,8,15,20,21],jpeg_qual:[1,19,20],jpg:[1,20,21],json:[1,21],jsonfield:[1,21],just:[6,11,13,15,16,17,19,21],kakaobrain:10,keep:[11,13,15,16],kei:[4,16,21],kept:13,kernel_s:10,kind:21,know:[15,17,21],known:13,lab:[10,11,14],label:[3,10,11,13,14,16,19,20,21],label_pipelin:[10,19],label_smooth:10,labelmixup:3,lambda:3,lambdalr:10,larg:[7,9,10,15,16,18,20,21],larger:[12,20],largest:20,last:16,latenc:2,later:21,latter:1,layer:[3,17],learn:[9,10,12,15,19,20],least:16,leclerc2022ffcv:15,leclerc:15,left:11,len:[13,21],length:[0,1,3,8,20,21],less:16,let:[11,13,15,20],level:[8,15,17],leverag:[2,17],libffcv:15,libjpeg:15,librari:[7,15,17],lift:[7,16],lightn:7,like:[4,7,8,11,16,20],limit:[8,21],line:[7,15,19],linear:[9,10,15,16,21],linearregressiondataset:[13,21],link:12,linreg_data:13,list:[3,4,7,8,10,16,21],liter:2,littl:[11,13,17],ll:[6,10,11,13,16,18,20,21],load:[2,4,8,13,15,16,17,20,21],loader:[1,5,6,7,8,9,11,13,15,16,17,19,20,21],local:7,locat:2,lock:17,logan:15,longer:13,look:[11,15],lookup:1,loop:[1,11,13,16],loss:[10,13],loss_fn:10,lossi:20,lot:15,low:[8,11,14],lower:[3,7,8],lr:[10,13],lr_schedul:10,lucki:17,machin:[2,8,9,11,12,15,16,17,20],made:[8,11],madri:15,mai:[1,11,13,17,20],main:[1,13,17],maintain:17,major:20,make:[1,6,7,8,10,11,13,14,15,17,20,21],make_my_dataset:19,malloc:1,manag:16,mani:[8,20],map:[2,4,8,10,18,21],margin:17,mask:3,match:[16,21],matric:1,matrix:8,matter:[4,17],max:3,max_resolut:[1,19,20],maxim:8,maximum:[1,11],maxpool2d:10,mayb:8,maybebrighten:11,md:12,mean:[3,8,13,15,16],meanwhil:11,measur:7,medium:17,mem_alloc:11,memori:[2,8,14,15,16,17],memory_format:10,mention:11,metadata:4,metadata_destin:1,metadata_sm:4,metadata_typ:[1,4],method:[1,11,13],might:[17,20],mimic:[7,20],min:[0,15],minim:[2,8,13,15,17],minut:15,misc:15,miss:2,mission:17,mistak:17,mix:[7,20],mixtur:15,mixup:3,mixuptoonehot:3,mode:[2,7],model:[7,8,9,12,15,16,18],modifi:7,modul:[5,10,11,15,16],modulewrapp:3,momentum:[10,15],more:[1,2,6,7,8,10,12,15,17,18,19,20],most:[0,7,8,11,16,18,20,21],mostli:[2,17,20],move:[3,8],mp:17,much:[7,8,16,17],mul:10,multi:[1,18],multipl:[1,2,7,8,15,16,18],must:16,my_dataset:[19,21],my_fil:20,my_shard:21,n:[7,13,15,21],name:[4,10,11],nativeamp:7,ndarrai:[1,3,21],ndarraydecod:[0,13,16],ndarrayfield:[0,1,13,21],nearli:13,necessari:[2,10,14,16,17],need:[11,16,17,20,21],needs_indic:2,network:[7,8,15,16],neural:[15,16],never:17,new_label:3,new_shap:11,new_stat:11,next:[7,9,10,20],next_traversal_ord:2,nn:[2,3,10,11,16],no_grad:10,nois:[13,16],non:[2,16],non_block:[3,10,16],none:[1,2,4,13,14,16],norm:13,normal:[3,8,10,13,16,17],normalizeimag:3,note:[2,8,10,11,13,15,17,20],notimplementederror:11,now:[11,13,15,21],np:[3,10,11,13,14,21],num_class:[3,10],num_epoch:13,num_exampl:13,num_work:[2,4,10,11,13,16,17,19,20,21],numba:[11,15],number:[2,3,4,7,8,11,13,15,16],numpi:[1,3,10,11,13,21],nvidia:[7,10,17],o:[8,15],object:[1,4,11,16,21],obtain:7,obviou:11,off:[8,15,20],offer:[8,15,17,20],offload:8,often:[8,20],ok:11,old:19,onc:[7,8,17],one:[1,2,6,7,15,16,17,21],ones:[8,15,20],onli:[0,2,7,8,11,13,16,17,21],op_id:2,opac:3,open:13,opencv:15,oper:[0,1,2,3,10,11,13,14,16,17,20],opportun:16,opt:10,optim:[7,13,15,17,18,19],option:[1,2,3,4,6,7,8,10,11,14,15,17,18,19,21],order:[2,4,6,7,8,10,11,13,17,19,21],orderopt:[2,8,10,11,13,16,17,19],org:3,origin:[7,11,17],os:[8,15,16,17,21],os_cach:[2,8,13,16,17],other:[6,8,10,11,17,19,20,21],other_image_field:20,otherwis:[11,15],our:[7,10,11,13,15,16,21],out:[3,8,10,15,17,18],outlier:20,outlin:11,outperform:7,output:[1,3,11,13,19],output_s:0,outsid:3,over:[6,11,13,16,17],overal:17,overhead:[11,15,16,17],own:[8,16,17],p3dn:7,p4d:7,packag:15,pad:[3,10,16],page:[4,8,15,20],page_s:4,pai:8,pain:15,pair:19,paper:7,parallel:[7,8,11],parallel_rang:[11,14],param:16,paramet:[0,1,2,3,4,13,17,20,21],park:15,part:[8,16],particular:17,particularli:17,pass:[0,1,2,11,13,17,19,20,21],path:[2,16,19,21],per:[3,11,13,15,18],perfect:[7,17],perfectli:16,perform:[0,7,8,11,13,15,16,17,20,21],performance_guid:2,pick:20,pick_a_corn:11,pickacorn:11,pin:8,pip:15,pipelin:[0,1,2,3,4,6,7,8,10,11,13,15,19,20,21],pipeline_nam:2,piplin:1,pixel:[1,3,8],pkg:15,pkl:13,place:[8,11,13],plai:15,platform:7,pleas:7,plot:7,plug:15,png:21,point:[0,1,3,11],pointer:[1,11],poison:3,popul:20,popular:7,portion:3,possibl:[0,1,2,13,14,17],post:[3,11],potenti:[0,1,21],pow:13,power:17,pre:[7,8,15,16,17],precis:7,prefer:[17,20],prepar:[2,4,16],preprocess:11,present:[7,16],preserv:20,previou:[11,13,16,17],previous_st:[0,3,11,14],principl:13,print:[10,11,13],probabl:[1,3,20],problem:15,proce:19,process:[2,4,7,8,11,15,16,17,21],produc:[1,20],product:13,program:[11,13],project:20,properli:8,properti:[0,1,11,14,17],proport:[1,7,20],provid:[1,7,8,9,10,11,12,14,15,16,17,20,21],pull:17,purpos:2,put:[6,10,11,17],px:7,python:[1,8,11,15,21],pytorch:[2,3,4,7,8,11,14,15,16,17,19,21],quadrant:11,qualiti:[1,7,8,17,20],quantiti:20,quasi:8,quasi_random:[2,8,13,16,17],queri:11,quickli:[9,12],quickstart:15,rais:[11,13],ram:[7,13,15,16,17,20],rand:[13,14],randint:[11,14],randn:[13,21],randn_lik:16,random:[0,1,2,3,7,8,10,11,13,14,16,17,19,20,21],randomhorizontalflip:[3,10,16],randomli:[0,3,8,11,20],randomresizedcrop:[3,20],randomresizedcroprgbimagedecod:[0,19,20],randomtransl:[3,10,16],rang:[0,10,11,13,19,20],rate:10,rather:[11,15],ratio:[0,3,20],raw:[1,3,7,8,15,20],rb:13,re:[8,10,20],read:[0,1,2,4,11,13,15,16,17,18,20,21],reader:1,readi:[6,10,16,21],readm:12,realist:7,realli:11,really_fast:15,reason:17,recommend:[11,17,18],recompil:[2,16],recov:13,reduc:[13,16,17,20],refer:[7,16],regress:[9,10,15,16,21],regular:[13,17],relabel:3,relat:17,relev:7,relu:10,remain:[13,21],remot:21,remov:[3,7,15],replac:[2,3,11,13,15,17,19],replacelabel:3,report:7,repositori:[7,9,12,21],represent:20,request:17,requir:[6,7,8,11,16,17,18,19,20,21],research:15,residu:[10,13],resiz:[0,1,3,7,8,19,20,21],resnet:[7,10],resolut:[0,7,16,20],resourc:[15,17,18,20],respect:1,respons:[1,13,20,21],rest:[11,13,19,20],result:[3,13,17,20],retriev:20,review:21,rewrit:13,rgb8:21,rgb:[1,3],rgbimagefield:[0,1,10,11,16,19,20,21],right:[11,21],roadmap:17,roughli:20,run:[7,8,11,13,16,17],runnabl:13,runtim:[8,16],s:[1,4,7,8,10,11,13,16,17,21],said:13,salman:15,sam:15,same:[2,3,7,8,11,13,14,15,16,17,20],same_lambda:3,sampl:[0,1,3,4,8,16,17,21],sampler:8,save:[1,8,11,13],scalar:[0,1,21],scale:[0,3,7,9,10,12,15,16,18,21],scaler:10,scarcest:18,scenario:[7,8,18],schedul:[7,10,15,17],scheme:20,scratch:6,script:[10,11,13,14,21],search:[7,15,18],sec:7,second:[9,13,15,16,21],section:[6,13,15,18,20,21],secur:17,see:[1,2,4,8,10,11,12,13,15,16,19,20,21],seed:[2,14,16],seem:17,segment:13,select:20,self:[9,10,11,12,13,14,16,21],separ:7,seqeunti:2,sequenc:[2,3,16],sequenti:[1,2,10,16],seri:16,serial:[8,11],serv:[13,16],servic:17,set:[3,7,8,10,14,15,16,17],set_to_non:10,set_trac:13,sever:16,sgd:[10,13],shape:[1,10,11,13,14,16,21],shard:[4,21],share:17,shift:3,should:[1,3,11,13,16,17,21],shouldn:17,show:[10,16,21],shuffl:[4,13,16,17],shuffle_indic:4,side:[0,1,3,8,20],sign:0,signific:[9,20],significantli:[7,13,15,17,20],similar:[4,7,16,17,20,21],similarli:[7,8,17],simpl:[8,10,13,15,17,21],simplergbimagedecod:[0,10,11,16,20],simpli:[0,1,20,21],simul:7,sinc:[11,13,14,16,17,21],singl:[1,7,8,9,11,13,15,16,17,20],sit:8,situat:[7,17],size:[0,1,2,3,4,8,10,11,15,16,17,19,20],slightli:20,slow:7,slowdown:8,slower:[11,13,17],small:18,smaller:7,smart:[1,20],smart_threshold:[1,20],smooth:10,smoothli:8,so:[7,8,11,13,14,15,16,17,20,21],solut:17,solv:13,some:[2,7,8,11,15,16,17],sometim:17,soon:8,sort:15,sourc:[0,1,2,3,4,7,10,21],space:[8,11,20],specif:[1,7,11,15,16,18,20],specifi:[1,3,4,8,11,16,20,21],speed:[8,9,10,15,16,17,20],speedup:15,split:21,sqrt:13,squar:[3,13],squeez:[3,10,13],ssd:[15,20],stabil:13,stage:[2,11],stage_ix:2,stai:11,stall:16,standard:[1,2,3,7,8,10,13,14,16],start:[11,13,15,16,17,19,21],start_tim:[11,13],state:[0,3,14],statist:[10,16],std:[3,16],stdev:13,step:[6,13,15,16,21],still:[8,13,17,21],storag:[1,7,8,17,20],store:[4,7,8,10,11,15,20,21],str:[1,2,4],stride:10,strike:7,strongli:11,subclass:[1,11,16],suboptim:11,subset:[1,2,4,16],substitut:13,suffici:[17,20],suggest:[13,17],suit:20,sum:[10,13],summar:8,summari:16,sung:15,support:[0,1,4,8,17,20,21],sure:[16,17,21],swap:15,system:[7,8,15,17,18,19,20],t:[1,2,8,11,13,14,15,17],take:[1,7,11,13,15,16,17,19,20,21],tar:7,target:3,target_dtyp:3,task:[7,8,11,17,20],technic:17,tell:[11,16],tensor:[1,3,11,13,16,21],term:17,test:[7,10,11,14],text:1,than:[0,1,7,11,15,16,17,20],thank:15,thankfulli:11,thei:[1,2,11,14,16,17,20,21],them:[8,11,15,16,17,21],therefor:1,thi:[1,2,6,7,8,10,11,13,14,15,16,17,18,20,21],think:[11,15],third:[11,14],thread:[2,8,15,17],three:[7,16],threshold:20,through:[15,16],throughout:14,throughput:[7,8,15,19],thu:[11,13,16],ti:14,time:[1,7,8,10,11,13,16,17,19,20],timm:7,titl:15,tmp:[10,11,13],to_binari:1,to_tupl:21,todevic:[3,10,13,16,19],todo:13,togeth:[6,8,11,21],toi:21,too:[7,8,16,17],took:7,tool:[8,15],top:[11,16],torch:[2,3,10,11,13,16,19,21],torchvis:[10,11,15,16,20],total:[13,20],total_correct:10,total_loss:13,total_num:10,totensor:[2,3,10,11,13,16,19],totorchimag:[3,10,16,19],tqdm:[10,13],track:11,trade:[8,15,20],train:[1,2,6,8,9,11,14,15,16,18,19,21],train_load:13,transfer:[8,15],transform:[2,5,8,9,10,13,15,19,20],translat:[3,10],travers:[2,17],traversal_ord:2,traversalord:2,tri:[2,8],triangular:10,truli:16,truth:13,tune:[8,13,15,18,19],tupl:[0,1,3,10,11,14,21],turbo:15,turn:15,tutori:[8,10,13,16,21],twice:7,two:[3,6,7,9,11,16,17,21],type:[1,2,3,8,10,11,19],typic:13,u1:1,uin8:10,uint8:[1,3,21],unavail:2,unblock:8,uncompress:20,underli:[8,13,15,17],unfeas:17,uniform:[2,13,17],union:2,unless:[1,17],unlik:[8,13,17],unnecessari:20,unpack:1,unshuffl:16,unspecifi:[13,16],up:[1,3,7,8,11,15,16],updat:[10,11,13,14],upper:3,url:15,us:[1,2,3,4,7,8,9,10,11,12,13,15,16,17,18,20,21],usag:[1,4,8,15,16,20],user:[1,13,15,17,20,21],usual:[2,17,20],util:[13,19,21],v100:7,valid:19,valu:[1,2,3,16,17,20],vanilla:13,vari:7,variabl:[0,1,13,21],varianc:13,variat:[16,20],varieti:[15,21],variou:[7,20],ve:[11,16,20],vector:[3,13,16,21],veri:[13,17,20,21],version:21,vertic:3,via:[7,13,20],view:[3,10,15],vision:[8,15,20],w:[3,11,13,20],w_est:13,w_grad:13,wa:[7,16],wai:[3,8,11,13,15,16],walk:15,walkthrough:10,warm:7,warmup:7,wasn:17,way_less:15,wb:13,we:[1,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21],webdataset:[4,6,7,17,19],websit:7,weight:[10,13],weight_decai:10,welcom:17,well:[9,15,16,17,20],were:7,what:[8,11,15,16,17],when:[1,2,3,7,8,10,16,20],where:[7,11,16,21],whether:[3,11,16],which:[1,2,3,7,11,13,15,16,17,20,21],which_corn:11,who:20,whole:[3,16],whose:11,why:1,wide:20,width:11,wish:20,with_indic:14,within:[11,14],without:[11,15,16],won:8,work:[1,3,6,7,8,11,15,17,18],worker:[2,4,16,17,21],worker_job_indexed_dataset:4,worker_job_webdataset:4,workload:8,worri:11,worst:7,would:[1,7,11,13,21],wrapper:17,write:[1,4,6,8,10,11,13,15,16,18,19],write_mod:[1,20],write_path:[19,21],writer:[1,5,8,10,11,13,15,19,20,21],writing_dataset:4,written:[1,15,16,21],wrt:10,x:[3,10,13,16,20,21],x_batch:13,xxxxxxx:15,y:[13,15,21],y_batch:13,year:15,yet:[8,17],yield:20,you:[2,3,8,15,16,17,20,21],your:[8,15,16,17,18,19,20,21],your_dataset:15,zero:[3,13],zero_grad:10},titles:["ffcv.fields.decoders module","ffcv.fields module","ffcv.loader module","ffcv.transforms module","ffcv.writer module","API Reference","Getting started","ImageNet Benchmarks","The Bottleneck Doctor","Examples","Training CIFAR-10 in 36 seconds on a single A100","Fast custom image transforms","ImageNet Fast Training","Large-Scale Linear Regression","Custom transforms with indices","Welcome to FFCV\u2019s documentation!","Making an FFCV dataloader","Tuning Guide","Performance Guide","Quickstart","Working with Image Data in FFCV","Writing a dataset to FFCV format"],titleterms:{"1":[10,17],"10":10,"2":[10,17],"3":10,"36":10,"4":10,"function":11,The:8,a100:10,about:11,advanc:11,alloc:11,an:[10,16],api:[5,15],approach:13,architectur:10,basic:13,benchmark:7,bottleneck:8,cifar:10,citat:15,code:13,compat:10,contributor:15,cpu:8,creat:10,custom:[11,14],data:[7,10,20],dataload:16,dataset:[7,10,13,16,17,20,21],decod:[0,20],disk:8,doctor:8,document:15,end:7,evalu:10,exampl:9,extrem:17,fake:13,fast:[11,12],featur:15,ffcv:[0,1,2,3,4,10,13,15,16,20,21],field:[0,1,21],format:21,gener:13,get:6,gpu:[8,17],grid:17,guid:[17,18],imag:[11,20],imagenet:[7,12],implement:11,index:21,indic:[14,15],inform:[11,16],introduct:15,larg:[13,17],less:13,linear:13,load:7,loader:[2,10],make:16,memori:[11,13],model:[10,17],modul:[0,1,2,3,4],more:[11,13,16],multi:17,multipl:17,naiv:13,optim:10,option:[16,20],order:16,other:16,paramet:10,per:17,perform:18,pipelin:16,pre:11,put:16,pytorch:13,quickstart:19,read:8,refer:[5,15],regress:13,result:7,s:15,scale:[13,17],scenario:17,search:17,second:10,setup:[10,13],singl:10,size:7,small:17,speed:13,start:6,state:11,step:10,tabl:15,templat:13,tensordataset:13,thing:13,togeth:16,train:[7,10,12,17],transform:[3,11,14,16],tune:17,tutori:15,up:[10,13],usag:11,webdataset:21,welcom:15,work:20,wrap:10,write:[20,21],writer:4}})